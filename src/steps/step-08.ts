/**
 * Type derivation
 */
import { toLowerCase, BufferDecoder } from "text-utils";

type User = {
  id: string;
  username: string;
  age: string;
  gender?: "F" | "M";
};

type ServerResponse<T = any> = {
  ok: boolean;
  error: string | null;
  payload: T;
};

async function loadUser() {
  const response = await fetch("/user");
  // describe the response shape as ServerResponse<User>
  const body = (await response.json()) as ServerResponse<User>;
  if (body.ok) {
    return body.payload;
  }
  throw new Error(body.error as string);
}

type UserProfile = Omit<User, "id">;
type UserProfileUpdate = Partial<UserProfile>;
function setUserProfile(user: User, update: UserProfileUpdate) {
  return { ...user, update };
}
async () => {
  const user = await loadUser();
  // setUserProfile(user, { id: "luke" });
  setUserProfile(user, { age: "12", gender: "M" });
};

function setUserGender(user: User, gender: User["gender"]) {
  user.gender = gender;
}

// demo for step 9
toLowerCase(new BufferDecoder(new Uint8Array([12, 32])).toString("hex"));

export default {};
