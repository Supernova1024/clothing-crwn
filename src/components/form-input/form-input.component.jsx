import './form-input.styles.scss';
// There are two ways to create a custom form component
// for its props

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />

      {label && (
        <label
          className={`${otherProps.value.length ?  'shrink': ''} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

// const FormInput = ({ label, inputOptions }) => {
//     return (
//       <div className="group">
//         <input className="form-input" {...inputOptions} />
  
//         {label && (
//           <label
//             className={`${inputOptions.value.length ?  'shrink': ''} form-input-label`}
//           >
//             {label}
//           </label>
//         )}
//       </div>
//     );
//   };

export default FormInput;
