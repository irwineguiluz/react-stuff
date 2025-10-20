function Input({
  type = 'text',
  id,
  value,
  label,
  placeholder,
  error,
  ...props
}) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        {...props}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;
