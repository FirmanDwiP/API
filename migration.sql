Table customers as U {
  id int [pk, increment]
  full_name varchar
  username varchar [unique]
  email varchar [unique]
  phone_number varchar
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}


Table drivers {
  id int [pk, increment]
  full_name varchar
  phone_number  varchar
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}


Table order_items {
  id int [pk]
  order_id int [ref: > orders.id]
  product_id int
  quantity int [default: 1]
}

Ref: order_items.product_id > products.id

Table orders {
  id int [pk, increment]
  user_id int [ref: > U.id]
  status order_status
  driver_id int [ref: > drivers.id]
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}


Enum order_status {
  accepted
  sending
  done
  failure
}


Table products {
  id int [pk, increment]
  name varchar
  price int
  created_at timestamp [default: `now()`]
  updated_at timestamp [default: `now()`]
}