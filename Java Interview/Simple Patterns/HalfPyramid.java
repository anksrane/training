public class HalfPyramid {
    public static void main(String[] args) {
        int n = 4;
        for (int i = 1; i <= n; i++) {// Rows
            for (int j = 1; j <= i; j++) {// columns
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
