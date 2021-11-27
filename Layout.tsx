import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

type Props = {
  title?: string;
};

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'TypeScript Next.js Stripe Example'
}) => (
  <Elements stripe={stripePromise}>
   
  </Elements>
);

export default Layout;