
import { useLocalStorage } from "./useLocalStorage";


export const useForm = (key, initialValue) => {
    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useLocalStorage(key, initialValue);


  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowSuccessMessage(true);
//   };

//   {showSuccessMessage && (
//     <div className="success-message" data-testid="successMessage">
//       <p>
//         You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
//       </p>
//       <p>Your new green friends will be shipped to:</p>
//       <br />
//       <br />
//       <p>
//         {values.firstName} {values.lastName}
//       </p>
//       <p>{values.address}</p>
//       <p>
//         {values.city}, {values.state} {values.zip}
//       </p>
//     </div>
//   )}

  return [values, handleChanges, ];
};

