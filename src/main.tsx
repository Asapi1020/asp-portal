import { Domain } from "./domain";
import { run } from "./frameworks";
import { Infra } from "./infra";
import { Usecases } from "./usecases";

const domain = new Domain();
const infra = new Infra();
const usecases = new Usecases({ domain, infra });

run({ domain, infra, usecases });
