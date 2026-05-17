import React, { createContext, useContext, useState, useCallback } from 'react';

type CursorType = 'default' | 'link' | 'project' | 'view';

interface CursorContextType {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorType: 'default',
  setCursorType: () => {},
  cursorText: '',
  setCursorText: () => {},
});

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorTypeState] = useState<CursorType>('default');
  const [cursorText, setCursorTextState] = useState('');

  const setCursorType = useCallback((type: CursorType) => {
    setCursorTypeState(type);
  }, []);

  const setCursorText = useCallback((text: string) => {
    setCursorTextState(text);
  }, []);

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType, cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
