import { BehaviorSubject } from "rxjs";

export const initialColumnDefs = [
  { field: "id", filter: true },
  { field: "name", filter: true },
  { field: "type" },
  { field: "hp" },
  { field: "attack" },
  { field: "defense" },
  { field: "special_attack" },
  { field: "special_defense" },
  { field: "speed" },
];

const columnDefsSubject = new BehaviorSubject(initialColumnDefs);

export const columnDefs$ = columnDefsSubject.asObservable();
