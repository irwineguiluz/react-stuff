function Input({ type = 'text', name, value, placeholder, ...props }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
}

export default Input;
