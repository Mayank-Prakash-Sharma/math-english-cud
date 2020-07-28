//I will use class based data model (available at run time too) rather than interface based data model (available only at compile time and not at run time). Do remember to use public infront of the data types. 
export class Exams {
  constructor(
  public id: string, 
  public title: string, 
  public description: string, 
  ) {}
}