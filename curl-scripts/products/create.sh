# API="https://damp-falls-64365.herokuapp.com"
# URL_PATH="/products"
API="https://damp-falls-64365.herokuapp.com"
URL_PATH="/products"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "product": {
    "name": "'"${NAME}"'",
    "category": "'"${CATEGORY}"'",
    "price": "'"${PRICE}"'",
    "picture_url": "'"${URL}"'"
  }
}'

echo
