import { QuoteProvider } from '../contexts/QuoteContext';
import Header from '../components/Header';
import ServiceSelection from '../components/ServiceSelection';
import RequestQuoteForm from '../components/RequestQuoteForm';
import OngoingQuotes from '../components/OngoingQuotes';

const BudgetCalculator: React.FC = () => {
    return (
        <div className="min-h-screen p-4">
            <div className="container mx-auto max-w-10xl py-8">
                <QuoteProvider>
                    <Header />
                    <ServiceSelection />
                    <RequestQuoteForm />
                    <OngoingQuotes />
                </QuoteProvider>
            </div>
        </div>
    );
};

export default BudgetCalculator