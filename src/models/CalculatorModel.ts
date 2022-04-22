const NO_CLEAR_SCREEN = false
const CLEAR_SCREEN = true

export default class CalculatorModel {
  #value :string
  #accumulator :number
  #operation :string
  #clearScreen :boolean

  constructor(value :string = null, accumulator :number = null, operation :string = null, clearScreen = false) {
    this.#value = value
    this.#accumulator = accumulator
    this.#operation = operation
    this.#clearScreen = clearScreen
  }

  get value() {
    return this.#value?.replace('.', ',') || '0'
  }

  isertNumber(newValue :string) {
    return new CalculatorModel(
      (this.#clearScreen || !this.#value) ? newValue : this.#value + newValue,
      this.#accumulator,
      this.#operation,
      NO_CLEAR_SCREEN
    )
  }

  isertDot() {
    return new CalculatorModel(
      this.#value?.includes('.') ? this.#value : this.#value + '.',
      this.#accumulator,
      this.#operation,
      NO_CLEAR_SCREEN
    )
  }

  clearScreen() {
    return new CalculatorModel()
  }

  insertOperation(nextOperation: string) {
    return this.calculate(nextOperation)
  }

  calculate(nextOperation :string = null) {
    const accumulator = !this.#operation
      ? parseFloat(this.#value)
      : eval(`${this.#accumulator} ${this.#operation} ${this.#value}`)

    const value = !this.#operation ? this.#value : `${accumulator}`

    return new CalculatorModel(
      value,
      accumulator,
      nextOperation,
      nextOperation ? CLEAR_SCREEN : NO_CLEAR_SCREEN
    )
  }
}
