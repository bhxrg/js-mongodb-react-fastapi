# importing fastapi
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
# calling fn
app = FastAPI()

# creating routes
items = []

# simple hello world route
@app.get("/")
def root():
    return {"message": "Hello, World!"}

# Define a POST endpoint at the path "/items"
@app.post("/items")
# Define a function `create_items` that takes a parameter `item` of type string
def create_items(item: str):
    # Add the received item to the list called `items` (assumes items is a list defined earlier)
    items.append(item)
    # Return the same item as the response
    return item

@app.get("/items")
def read_items():
    return items

# Define a GET endpoint with a dynamic path parameter `item_id`
@app.get("/items/{item_id}")
# Define a function `get_item_by_id` that accepts an integer `item_id` and returns a string
def get_item_by_id(item_id: int) -> str:
    if item_id < len(items):
    # Return the item as a string
     return items[item_id]
# handling http errors
    else:
       raise HTTPException(status_code=404, detail=f"Item {item_id} not found")


#request & path parameters

@app.get("/items")
def list_items(limit: int=10):
   return items[0:limit]

