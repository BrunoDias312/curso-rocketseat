public class Main {
    public static void main(String[] args) {
        Conta conta = new Conta(1234, "Rafael");
        String name = conta.getNameUser();

        System.out.println(name);

        double a = 4.98;

        int b = (int) a;

        System.out.println(b);
    }
}
