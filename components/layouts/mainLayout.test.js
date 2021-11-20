import MainLayout from './mainLayout'

import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { cardClasses } from '@mui/material';

test('should show login form', () => {
    const { context } = render(<MainLayout><div>hi</div></MainLayout>);
    const body = container.body;
    console.log(body);
    // Events and assertions...
  })