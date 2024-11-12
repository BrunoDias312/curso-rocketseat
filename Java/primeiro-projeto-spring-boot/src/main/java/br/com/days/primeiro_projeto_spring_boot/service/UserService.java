package br.com.days.primeiro_projeto_spring_boot.service;

import br.com.days.primeiro_projeto_spring_boot.model.User;

public interface UserService {

    public void CreateUser(User user);

    public void EditUser(int id);

    public User ListUserById(int id);

    public User ListAllUsers();
}
