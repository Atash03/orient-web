import { useCallback, useState } from 'react';

interface UseToggleValues {
  isToggle: boolean
  onToggle: () => void
  onOpen: () => void
  onClose: () => void
}

const useToggle = (): UseToggleValues => {
  const [isToggle, setToggle] = useState<boolean>(false);

  const onToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const onOpen = useCallback(() => {
    setToggle(true);
  }, []);

  const onClose = useCallback(() => {
    setToggle(false);
  }, []);

  return { isToggle, onToggle, onOpen, onClose };
};

export default useToggle;