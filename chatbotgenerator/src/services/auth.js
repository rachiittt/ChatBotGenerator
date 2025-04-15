

export const signup = async ({email, password}) => {
  const response = await fetch("/api/auth/signup", {
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
  }
  return await response.json();
};


export const login = async ({email, password}) => {
    const response = await fetch("/api/auth/login", {
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
    }
    return await response.json();
  };