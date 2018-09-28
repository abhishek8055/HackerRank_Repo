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

	public static int height(Node root) {
        //IF NODE IS NULL THEN HEIGHT IS ZERO
      	if(root == null){
            return 0;
        }
        //IF NODE IS A LEAF THEN HEIGHT IS NULL
        if(root.left == null && root.right == null){
            return 0;
        }
        int l = height(root.left);
        int r = height(root.right);
        //RETURN 1+LEFT/RIGHT HEIGHT WHICH EVER IS GREATER
        return 1+(l>r?l:r);
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
        int height = height(root);
        System.out.println(height);
    }	
}