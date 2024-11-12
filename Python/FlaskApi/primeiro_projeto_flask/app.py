from flask import Flask, request, jsonify
from models.task import Task
from typing import Optional

# __name__ = __main__
app = Flask(__name__)


# CRUD
tasks: list[Task] = []
task_id_control = 1


@app.route("/tasks", methods=["POST"])
def create_task():
    global task_id_control
    data = request.get_json()
    print(data)
    new_task = Task(
        id=task_id_control,
        title=data["title"],
        completed=data["completed"],
        description=data.get("description", ""),
    )
    task_id_control += 1
    tasks.append(new_task)
    return jsonify({"msg": "Nova tarefa criada com sucesso", "tasks": tasks}), 200


@app.route("/tasks", methods=["GET"])
def get_tasks():

    task_list = [task.to_dict() for task in tasks]

    # for task in tasks:
    #     task_list.append(task.to_dict())  # type: ignore

    output = {
        "tasks": task_list,
        "total_tasks": len(task_list),
    }

    return jsonify(output), 200


@app.route("/tasks/<int:id>", methods=["GET"])
def get_task(id: int):
    for t in tasks:
        if t.id == id:
            return jsonify(t.to_dict())

    return jsonify({"message": "Não encontrado"}), 404


@app.route("/user/<int:user_id>", methods=["GET"])
def update_list(user_id: str):
    print("list", user_id, type(user_id))

    return jsonify({"user": user_id}), 200


@app.route("/tasks/<int:id>", methods=["PUT"])
def update_task(id: int):
    task: Optional[Task] = None

    for t in tasks:
        if t.id == id:
            task = t

        if task == None:
            return jsonify({"message": "Não encontrado"}), 404

    data = request.get_json()
    # Use assert para informar ao verificador de tipo que task não é None
    assert task is not None

    task.title = data["title"]
    task.completed = data["description"]
    task.description = data["description"]

    return jsonify({"message": "Não encontrado"}), 404


if __name__ == "__main__":
    app.run(debug=True)
