# API="https://damp-falls-64365.herokuapp.com"
# URL_PATH="/products"
API="http://localhost:4741"
URL_PATH="/purchases"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
  "purchase": {
    "name": "'"${NAME}"'",
    "category": "'"${CATEGORY}"'",
    "price": "'"${PRICE}"'",
    "picture_url": "'"${URL}"'",
    "review": "'"${REVIEW}"'"
  }
}'

echo
