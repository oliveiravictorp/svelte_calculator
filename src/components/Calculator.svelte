<script lang="ts">
  import CalculatorModel from "../models/CalculatorModel";
  import Button from "./Button.svelte";
  import Line from "./Line.svelte";
  import Screen from "./Screen.svelte";

  let calc = new CalculatorModel()

  const insertNumber = (num :string) => calc = calc.isertNumber(num)
  const insertOperation = (op :string) => calc = calc.insertOperation(op)
  const calculate = () => calc = calc.calculate()
  const insertDot = () => calc = calc.isertDot()
  const clearScreen = () => calc = calc.clearScreen()
</script>

<div class="calculator">
  <Screen value={calc.value} />
  <Line>
    <Button highlight triple text="AC" onClick={clearScreen} />
    <Button operation text="/" onClick={insertOperation} />
  </Line>
  <Line>
    <Button text="7" onClick={insertNumber} />
    <Button text="8" onClick={insertNumber} />
    <Button text="9" onClick={insertNumber} />
    <Button operation text="*" onClick={insertOperation} />
  </Line>
  <Line>
    <Button text="4" onClick={insertNumber} />
    <Button text="5" onClick={insertNumber} />
    <Button text="6" onClick={insertNumber} />
    <Button operation text="+" onClick={insertOperation} />
  </Line>
  <Line>
    <Button text="1" onClick={insertNumber} />
    <Button text="2" onClick={insertNumber} />
    <Button text="3" onClick={insertNumber} />
    <Button operation text="-" onClick={insertOperation} />
  </Line>
  <Line>
    <Button double text="0" onClick={insertNumber} />
    <Button text="," onClick={insertDot} />
    <Button highlight text="=" onClick={calculate} />
  </Line>
</div>

<style>
  .calculator {
    background-color: var(--background-color);
    height: 440px;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }
</style>
