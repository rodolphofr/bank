import { Printable } from "../models/interfaces/Printable";

export function print(...printers: Printable[]) {
    printers.forEach(p => p.toLogConsole());
}