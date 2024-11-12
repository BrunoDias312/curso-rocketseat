package br.com.days.primeiro_projeto_spring_boot.model;

public class User {
    private String name;
    private String lastname;
    private int year;
    private String password;

    public User(String name, String lastname, String password, int year){
        this.name = name;
        this.lastname = lastname;
        this.year = year;
        this.password = password;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
