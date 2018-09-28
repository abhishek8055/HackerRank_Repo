import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;
    
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {


    public static void preOrder(Node root) {
        //CHECK IF NODE IS NULL OR NOT
        if(root!=null){
            //IF NOT THEN PRINT THE DATA
            System.out.print(root.data+" ");
        }else{
            return;
        }
        //CHECK IF LEFT NODE EXISTS
        if(root.left!=null){
            preOrder(root.left);
        }
        //CHECK IF RIGHT NODE EXISTS
        if(root.right!=null){
            preOrder(root.right);
        }       
    }

	public static Node insert(Node root, int data) {
        if(root == null) {
            return new Node(data);
        } else {
            Node cur;
            if(data <= root.data) {
                cur = insert(root.left, data);
                root.left = cur;
            } else {
                cur = insert(root.right, data);
                root.right = cur;
            }
            return root;
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();
        Node root = null;
        while(t-- > 0) {
            int data = scan.nextInt();
            root = insert(root, data);
        }
        scan.close();
        preOrder(root);
    }	
}