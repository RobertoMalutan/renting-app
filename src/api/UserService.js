
export function login(data) {
  var outerData = {}
  outerData['data'] = data
  return RequestService.post('/login', null, outerData)
}

export function signUp(data) {
  return api.createUser(
    {
      data: {
        type: 'users',
        attributes: data
      }
    }
  )
}