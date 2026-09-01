import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth, addUser } from '../../firebase';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import TermsModal from '../components/TermsModal';
import VerificationModal from '../components/VerificationModal';

export function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [team, setTeam] = useState('Operations');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8 || !/\d/.test(password)) {
      setError('Password must be at least 8 characters and include a number.');
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>_\-\\[\]/`~+=;']/ .test(password)) {
      setError('Password must contain at least one special character.');
      return;
    }
    if (!agreeTerms) {
      setError('You must agree to the Terms & Conditions.');
      return;
    }

    setIsLoading(true);
    try {
      // check if email already registered
      const methods = await fetchSignInMethodsForEmail(auth, email).catch(() => []);
      if (methods && methods.length > 0) {
        if (methods.includes('password')) {
          setError('An account with this email already exists. Please sign in or reset your password.');
        } else {
          setError(`This email is already registered via ${methods.join(', ')}. Please sign in with that provider.`);
        }
        setIsLoading(false);
        return;
      }

      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      // add user record to realtime database for app usage
      await addUser({ name: name || 'New User', email, team });
      if (userCred.user) {
        const actionCodeSettings = {
          url: window.location.origin,
          handleCodeInApp: false,
        } as any;
        try {
          await sendEmailVerification(userCred.user, actionCodeSettings);
          console.log('Verification email sent to', userCred.user.email);
        } catch (sendErr) {
          console.error('sendEmailVerification failed', sendErr);
        }
      }
      // keep the user signed in but require email verification before routing
      setIsVerificationOpen(true);
    } catch (err: any) {
      console.error('Signup failed', err);
      const code = err?.code || '';
      switch (code) {
        case 'auth/email-already-in-use':
          setError('An account with this email already exists. Try signing in or resetting your password.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        case 'auth/weak-password':
          setError('Password is too weak. Use at least 8 characters and include numbers/symbols.');
          break;
        default:
          setError(err?.message || 'Signup failed');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Create an account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Team</label>
          <Input value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team or department" />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="flex items-center gap-2">
          <input id="agreeTerms" type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600" />
          <label htmlFor="agreeTerms" className="text-sm text-gray-600">I agree to the <button type="button" onClick={() => setIsTermsOpen(true)} className="text-green-600">Terms &amp; Conditions</button></label>
        </div>

        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white" disabled={isLoading}>
          {isLoading ? 'Creating account...' : 'Sign up'}
        </Button>
      </form>

      <p className="text-sm text-gray-600 mt-4">
        By creating an account you agree to our <button type="button" onClick={() => setIsTermsOpen(true)} className="text-green-600">Terms &amp; Conditions</button>.
      </p>
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <VerificationModal isOpen={isVerificationOpen} onClose={() => setIsVerificationOpen(false)} />
    </div>
  );
}

export default Signup;
