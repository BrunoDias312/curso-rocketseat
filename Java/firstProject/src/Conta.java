public class Conta {
    private int numberAcount;
    private String nameUser;

    public Conta(int numberAcount, String nameUser) {
        this.numberAcount = numberAcount;
        this.nameUser = nameUser;
    }

    public int getNumberAcount() {
        return numberAcount;
    }

    public void setNumberAcount(int numberAcount) {
        this.numberAcount = numberAcount;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }
}
