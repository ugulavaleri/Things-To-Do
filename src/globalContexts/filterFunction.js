export function handleFilterTodos(todos, filterWord) {
    return todos.filter((todo) => {
        if (filterWord === "all") {
            return true;
        } else if (filterWord === "active") {
            return !todo.isActive;
        } else if (filterWord === "completed") {
            return todo.isActive;
        }
    });
}
