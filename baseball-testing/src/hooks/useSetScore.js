import { useLocalStorage } from './useLocalStorage';

export const useSetScore = () => {
    const [score, setSore] = useLocalStorage(1);

    return [score, setSore];
}