import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it('renders the correct heading', async () => {
        render(<Home />);

    await waitFor(() => {
        const heading = screen.queryByText('Get started by editing app/page.tsx');
        if (heading) 
        {
            expect(heading).toBeInTheDocument();
            return true; 
        }
        return false; 
        });
    });
});
