export const sortPersons = persons => persons.map(
  legalPerson => {
    const activeEmployees = [...legalPerson.activeEmployees].sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    const employees = [...legalPerson.employees].sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });

    return { ...legalPerson, activeEmployees, employees };
  }
);
