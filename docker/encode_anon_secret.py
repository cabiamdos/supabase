# from jwt import jwt
import jwt
# import requests

# Define your secret key
secret_key = "jpoaisjfdpijinzklxcpoiwPDJFAPSIiohsadfphaspdfj2342"  # Replace with your actual secret key

payload_roles = ["anon", "service_role"]


print("Secret key you inputed: %s" % (secret_key))
for payload_role in payload_roles:
  # Define your payload
  payload = {
      "role": payload_role,
      "iat": 1625137684,  # Issued At Time
      "exp": 2013955532909   # Expiry Time
  } 

  # Generate the JWT token
  jwt_token = jwt.encode(payload, secret_key, algorithm='HS256')
  print("%s: %s" % (payload_role.upper(), jwt_token.upper()))
  # print(jwt_token.decode('utf-8'))
