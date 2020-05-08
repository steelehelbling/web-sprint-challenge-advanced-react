import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    const { getByText } = render(<CheckoutForm />);   

      const firstNameInput = getByText(/First Name:/i);
  expect(firstNameInput).toBeInTheDocument();
 
   const lastNameInput = getByText(/Last Name:/i);
   expect(lastNameInput).toBeInTheDocument();
 
   const AddressInput = getByText(/Address:/i);
   expect(AddressInput).toBeInTheDocument();
 
   const CityInput = getByText(/City:/i);
   expect(CityInput).toBeInTheDocument();

   const StateInput = getByText(/State:/i);
   expect(StateInput).toBeInTheDocument();

   const ZipInput = getByText(/Zip:/i);
   expect(ZipInput).toBeInTheDocument();

          
});

test(' submit working', () => {

    async () =>{  const { getByLabelText, getByTestId, getByText } = render(<CheckoutForm />);   
          
    const firstNameInput = getByText(/First Name:/i);
     const lastNameInput = getByText(/Last Name:/i);
     const AddressInput = getByText(/Address:/i);
     const CityInput = getByText(/City:/i);
     const StateInput = getByText(/State:/i);
     const ZipInput = getByText(/Zip:/i);
      
        fireEvent.change(firstNameInput, {
          target: { name: 'firstName', value: 'Steele' },
        });
        fireEvent.change(lastNameInput, {
          target: { name: 'lastName', value: 'helbling' },
        });
        fireEvent.change(AddressInput, {
          target: { name: 'Address', value: '115 Bella Place' },
        });
        fireEvent.change(CityInput, {
            target: { name: 'City', value: 'Holly Springs' },
          });
          fireEvent.change(StateInput, {
            target: { name: 'State', value: 'North Carolina' },
          });          
          fireEvent.change(ZipInput, {
            target: { name: 'Zip', value: '27540' },
          });     
        expect(firstNameInput.value).toBe('Steele')
        expect(lastNameInput.value).toBe('helbling')
        expect(AddressInput.value).toBe('115 Bella Place')
        expect(CityInput.value).toBe('Holly Springs')
        expect(StateInput.value).toBe('North Carolina')
        expect(ZipInput.value).toBe('27540')

        fireEvent.click(getByTestId("submit"))}
  
      });