public class InvertedhalfPyramid {
    public static void main(String[] args) {
        int n = 4;
        for (int i = n; i >= 1; i--) {// Rows
            for (int j = 1; j <= i; j++) {// columns
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
