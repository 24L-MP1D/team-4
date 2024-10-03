export async function postfetcherwithtoken (path: string, jsonbody:{}) {
    const accessToken = localStorage.getItem("accessToken") || ""
    const data = await fetch (`http://localhost:4000/${path}`, {
      method: "POST",
      body:JSON.stringify(jsonbody),
      headers: {
        accessToken: accessToken
      }
    }).then((res)=> res.json())
    return data
  }