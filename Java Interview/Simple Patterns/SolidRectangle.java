public class SolidRectangle {
    public static void main(String[] args) {
        int n = 4;
        int m = 5;
        for (int i = 1; i <= n; i++) { // Rows
            for (int j = 1; j <= m; j++) { // Columns
                System.out.print("*");
            }
            System.out.println();
        }
    }
}