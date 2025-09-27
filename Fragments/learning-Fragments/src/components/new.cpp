#include <stdio.h>
int main() {
    int rows, cols, i, j;
    int sum = 0;
    long long int product = 1;
    printf("Enter the number of rows and columns for the matrix: ");
    scanf("%d %d", &rows, &cols);
    int matrix[rows][cols];
    printf("Enter the elements of the matrix:\n");
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
            sum += matrix[i][j];
            product *= matrix[i][j];
        }
    }
    printf("\nThe declared matrix is:\n");
    for (i = 0; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
    printf("\nThe sum of all elements in the matrix is: %d\n", sum);
    printf("The product of all elements in the matrix is: %lld\n", product);
    return 0;
}
