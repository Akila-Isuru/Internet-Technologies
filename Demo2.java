class Vehicle {
    String model;
    int year;

   public Vehicle(String model,int year){
        this.model = model;
        this.year = year;
    }
    void drive(){
        System.out.println("Vehicle driving");
    }
    void displayInfo(){
        System.out.println("model :"+this.model+""+"year :"+this.year);
    }

}

class Car extends Vehicle {
     public Car(String model, int year) {
        super(model, year);
       
    }

     @Override
     void drive(){
        System.out.println("car driving");
     }

}

class Ezxample{
    public static void main(String[] args) {
        Vehicle car = new Car("Royta",2001);
        car.displayInfo();

        
    }
}