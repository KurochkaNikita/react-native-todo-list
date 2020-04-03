export class Http {
  static HEADER = {'Content-Type': 'application/json'};

  static async get(url){
    try{
      return await request(url, "GET")
    } catch (err) {
      console.log('err', err)
      throw err
    }
  }

  static async post(url, data){
    try{
      return await request(url, "POST", data)
    } catch (e) {
      console.log('err', e)
      throw err
    }
  }

  static async delete(url){
    try{
      return await request(url, "DELETE")
    } catch (e) {
      console.log('err', e)
      throw err
    }
  }

  static async patch(url, data = {}){
    try{
      return await request(url, "PATCH", data)
    } catch (e) {
      console.log('err', e)
      throw err
    }
  }
};

async function request(url, method = 'GET', data) {
  const config = {
    method,
    header: Http.HEADER,
  };

  if(method === "POST" || method === "PATCH"){
    config.body = JSON.stringify(data)
  }

  const res = await fetch(url, config);
  return await res.json()
}