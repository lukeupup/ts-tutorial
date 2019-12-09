/**
 * classes
 */

// basic
class Animal {
  name: string;
  age: number = 0; // also initialized
  canFly?: boolean;
  constructor(name: string) {
    this.name = name; // non-optional property must be initialized.
  }
}

// extends
class Dog extends Animal {
  constructor() {
    super("Dog");
  }
  bark() {
    console.log("Woof");
  }
}

// private / public / protected
class Person {
  protected name: string;
  private uuid: string;
  constructor(name: string) {
    this.uuid = Math.random().toString();
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    // this.uuid = Math.random().toString();
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.department);
// console.log(howard.name);

// abstract
abstract class ConfigManager {
  protected config?: object;
  abstract loadConfig(): Promise<void>; // <== not a complate method, just a function shape
  public getConfig() {
    return this.config || {};
  }
}

// const cm = new ConfigManager();

class FetchConfigManager extends ConfigManager {
  async loadConfig() {
    this.config = await fetch("/config");
  }
}
class LocalStorageConfigManager extends ConfigManager {
  async loadConfig() {
    this.config = JSON.parse(localStorage.getItem("config") || "{}");
  }
}

// readonly, static
class Component {
  static validateState(state: any) {
    if (state.a) {
      return true;
    }
  }
  readonly state = {};
  setState(newState: object) {
    // avoid use `object` type in formal code
    Object.assign(this.state, newState);
  }
  componentDidMount() {
    // this.state = { a: 1 };
    this.setState({ a: 1 });
    Component.validateState(this.state);
  }
}

interface ComponentWithProps extends Component {
  props: object;
}

export default {};
