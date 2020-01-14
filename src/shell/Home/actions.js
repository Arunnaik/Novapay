export function listUser() {
  return { type: "FETCH_USERS" };
}

export function addOrganization(organization){
  return { type: "ADD_ORGANIZATION",organization };
}


