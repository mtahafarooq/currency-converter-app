import React from 'react';

import { Label } from '../src/components/common/Label';
import { CheckMark } from '../src/components/common/CheckMark';
import { CardPanel } from '../src/components/common/CardPanel';

import { CurrencyInput } from '../src/components/others/CurrencyInput';
import { OptionItem } from '../src/components/others/OptionItem';
import { ThemeItem } from '../src/components/others/ThemeItem';


import { render, cleanup, fireEvent } from '@testing-library/react-native';


// Label Component Tests

it('should properly render the text', () => {
  const rendered = render(<Label label={'Label'} />);
  const textComponent = rendered.getByTestId('text');

  expect(textComponent.props.children).toEqual('Label');
});

//CheckMark Component Tests

it('Should not render check icon if checked prop is set to false ', () => {
  const rendered = render(<CheckMark color={'#4F6D7A'} checked={false} />);
  const checkComponent = rendered.getByTestId('circle');

  expect(checkComponent.props.children).toEqual(null);
});

//CardPanel Component Tests

it('should fire onPress events', () => {
  const pressHandler = jest.fn();
  const rendered = render(<CardPanel pressHandler={pressHandler} />);
  const CardPanelComponent = rendered.getByTestId('submit');

  fireEvent(CardPanelComponent, 'press');

  expect(pressHandler).toHaveBeenCalled();
});

//CurrencyInput Component Tests

it('should fire onPress events', () => {
  const pressHandler = jest.fn();
  const rendered = render(<CurrencyInput onCurrencySelect={pressHandler} />);
  const CurrencyInputComponent = rendered.getByTestId('currency-select');

  fireEvent(CurrencyInputComponent, 'press');

  expect(pressHandler).toHaveBeenCalled();
});

it('should properly render the text', () => {
  const rendered = render(<CurrencyInput label={'USD'} />);
  const currencyLabel = rendered.getByTestId('currency-label');

  expect(currencyLabel.props.children).toEqual('USD');

});

it('should fire onChange events', () => {
  const onChange = jest.fn();
  const rendered = render(<CurrencyInput onInputChange={onChange} />);
  const inputComponent = rendered.getByTestId('currency-input');

  fireEvent(inputComponent, 'changeText', 'new text');

  expect(onChange).toHaveBeenCalledWith('new text');
});

//OptionItem Component Tests

it('should fire onPress events', () => {
  const pressHandler = jest.fn();
  const rendered = render(<OptionItem pressHandler={pressHandler} />);
  const OptionItemComponent = rendered.getByTestId('submit');

  fireEvent(OptionItemComponent, 'press');

  expect(pressHandler).toHaveBeenCalled();
});

it('should properly render the text', () => {
  const rendered = render(<OptionItem label={"Options"} />);
  const OptionItemComponent = rendered.getByTestId('text');

  expect(OptionItemComponent.props.children).toEqual('Options');
});

//ThemeItem Component Tests

it('should fire onPress events', () => {
  const pressHandler = jest.fn();
  const rendered = render(<ThemeItem pressHandler={pressHandler} />);
  const ThemeItemComponent = rendered.getByTestId('submit');

  fireEvent(ThemeItemComponent, 'press');

  expect(pressHandler).toHaveBeenCalled();
});

it('should properly render the text', () => {
  const rendered = render(<ThemeItem label={"Themes"} />);
  const ThemeItemComponent = rendered.getByTestId('text');

  expect(ThemeItemComponent.props.children).toEqual('Themes');
});