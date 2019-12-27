import { useLocalStorage } from './useLocalStorage';

export const useSetScore = () => {
    const [score, setSore] = useLocalStorage(0);

    return [score, setSore];
}