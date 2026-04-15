import { useState, useEffect } from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [expression, setExpression] = useState('');
  const [resetNext, setResetNext] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Requisito 3: Evitar interacción con teclado físico
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevenir el comportamiento por defecto de cualquier tecla, solo permitimos interactuar con mouse.
      // Así se cumple el requisito de que "solo reaccione y reciba ordenes mediante el click sobre el componente visual."
      e.preventDefault();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClear = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperator(null);
    setExpression('');
    setErrorMsg('');
    setResetNext(false);
  };

  const handleNumber = (num) => {
    if (errorMsg) return;

    if (currentValue === '0' || resetNext) {
      setCurrentValue(num);
      setResetNext(false);
    } else {
      if (currentValue.length < 12) { // Evitar números que rompan el display
        setCurrentValue(currentValue + num);
      }
    }
  };

  const handleDecimal = () => {
    if (errorMsg) return;
    
    if (resetNext) {
        setCurrentValue('0.');
        setResetNext(false);
        return;
    }
    if (!currentValue.includes('.')) {
      setCurrentValue(currentValue + '.');
    }
  };

  const calculate = (a, b, op) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    
    switch (op) {
      case '+': return numA + numB;
      case '-': return numA - numB;
      case '*': return numA * numB;
      case '/': 
        if (numB === 0) {
            throw new Error('División por cero');
        }
        return numA / numB;
      default: return numB;
    }
  };

  const handleOperator = (op) => {
    if (errorMsg) return;

    if (operator && !resetNext) {
        try {
            const result = calculate(previousValue, currentValue, operator);
            const formattedResult = String(Number((result).toFixed(8))); // Prevenir problemas de flotantes y mantener longitud
            setCurrentValue(formattedResult);
            setPreviousValue(formattedResult);
            setExpression(`${formattedResult} ${op}`);
        } catch (err) {
            setErrorMsg('Error: ' + err.message);
            setCurrentValue('Error');
            setExpression('');
            setPreviousValue(null);
            setOperator(null);
            setResetNext(true);
            return;
        }
    } else {
        setPreviousValue(currentValue);
        setExpression(`${currentValue} ${op}`);
    }
    
    setOperator(op);
    setResetNext(true);
  };

  const handleEqual = () => {
    if (errorMsg || !operator || !previousValue) return;

    try {
        const result = calculate(previousValue, currentValue, operator);
        const formattedResult = String(Number((result).toFixed(8)));
        setCurrentValue(formattedResult);
        setExpression(`${previousValue} ${operator} ${currentValue} =`);
        setPreviousValue(null);
        setOperator(null);
        setResetNext(true);
    } catch (err) {
        setErrorMsg('Error: ' + err.message);
        setCurrentValue('Error');
        setExpression('');
        setPreviousValue(null);
        setOperator(null);
        setResetNext(true);
    }
  };

  return (
    <main className="calculator">
      <Display 
        expression={expression} 
        currentValue={errorMsg ? currentValue : Number(currentValue).toLocaleString('en-US', {maximumFractionDigits: 8})} 
      />
      <Keypad 
        onNumber={handleNumber}
        onOperator={handleOperator}
        onClear={handleClear}
        onEqual={handleEqual}
        onDecimal={handleDecimal}
      />
    </main>
  );
};

export default Calculator;
