import { useState } from 'react';

export const useToggle = (
  initialValue: boolean
): [boolean, <T>(newValue: T) => void] => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = <T>(newValue: T) =>
    typeof newValue === 'boolean' ? setValue(newValue) : setValue(!value);

  return [value, toggleValue];
};

export default useToggle;
