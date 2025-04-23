export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      employee_shifts: {
        Row: {
          created_at: string | null
          date: string
          employee_id: string | null
          id: string
          shift: Database["public"]["Enums"]["shift_type"]
          status: Database["public"]["Enums"]["employee_status"] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string
          employee_id?: string | null
          id?: string
          shift: Database["public"]["Enums"]["shift_type"]
          status?: Database["public"]["Enums"]["employee_status"] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          employee_id?: string | null
          id?: string
          shift?: Database["public"]["Enums"]["shift_type"]
          status?: Database["public"]["Enums"]["employee_status"] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      equipment: {
        Row: {
          created_at: string | null
          id: string
          last_maintenance_date: string | null
          name: string
          next_maintenance_date: string | null
          notes: string | null
          status: Database["public"]["Enums"]["equipment_status"] | null
          type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_maintenance_date?: string | null
          name: string
          next_maintenance_date?: string | null
          notes?: string | null
          status?: Database["public"]["Enums"]["equipment_status"] | null
          type: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_maintenance_date?: string | null
          name?: string
          next_maintenance_date?: string | null
          notes?: string | null
          status?: Database["public"]["Enums"]["equipment_status"] | null
          type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      expenses: {
        Row: {
          amount: number
          category: string
          created_at: string | null
          date: string
          description: string | null
          id: string
          recorded_by: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          category: string
          created_at?: string | null
          date?: string
          description?: string | null
          id?: string
          recorded_by?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string | null
          date?: string
          description?: string | null
          id?: string
          recorded_by?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      financial_transactions: {
        Row: {
          amount: number
          created_at: string | null
          date: string
          description: string | null
          due_date: string | null
          id: string
          payment_status: Database["public"]["Enums"]["payment_status"] | null
          recorded_by: string | null
          transaction_type: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          date?: string
          description?: string | null
          due_date?: string | null
          id?: string
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          recorded_by?: string | null
          transaction_type: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          date?: string
          description?: string | null
          due_date?: string | null
          id?: string
          payment_status?: Database["public"]["Enums"]["payment_status"] | null
          recorded_by?: string | null
          transaction_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      fuel_purchases: {
        Row: {
          created_at: string | null
          date: string
          fuel_type: Database["public"]["Enums"]["fuel_type"]
          id: string
          invoice_number: string | null
          price_per_unit: number
          quantity: number
          recorded_by: string | null
          supplier_name: string
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string
          fuel_type: Database["public"]["Enums"]["fuel_type"]
          id?: string
          invoice_number?: string | null
          price_per_unit: number
          quantity: number
          recorded_by?: string | null
          supplier_name: string
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          fuel_type?: Database["public"]["Enums"]["fuel_type"]
          id?: string
          invoice_number?: string | null
          price_per_unit?: number
          quantity?: number
          recorded_by?: string | null
          supplier_name?: string
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      fuel_sales: {
        Row: {
          created_at: string | null
          date: string
          fuel_type: Database["public"]["Enums"]["fuel_type"]
          id: string
          price_per_unit: number
          quantity: number
          recorded_by: string | null
          shift: Database["public"]["Enums"]["shift_type"]
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string
          fuel_type: Database["public"]["Enums"]["fuel_type"]
          id?: string
          price_per_unit: number
          quantity: number
          recorded_by?: string | null
          shift: Database["public"]["Enums"]["shift_type"]
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          fuel_type?: Database["public"]["Enums"]["fuel_type"]
          id?: string
          price_per_unit?: number
          quantity?: number
          recorded_by?: string | null
          shift?: Database["public"]["Enums"]["shift_type"]
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      fuel_stock: {
        Row: {
          current_quantity: number
          fuel_type: Database["public"]["Enums"]["fuel_type"]
          id: string
          last_updated: string | null
          tank_capacity: number
          updated_by: string | null
        }
        Insert: {
          current_quantity: number
          fuel_type: Database["public"]["Enums"]["fuel_type"]
          id?: string
          last_updated?: string | null
          tank_capacity: number
          updated_by?: string | null
        }
        Update: {
          current_quantity?: number
          fuel_type?: Database["public"]["Enums"]["fuel_type"]
          id?: string
          last_updated?: string | null
          tank_capacity?: number
          updated_by?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          contact_number: string | null
          created_at: string | null
          full_name: string | null
          id: string
          role: string | null
          updated_at: string | null
        }
        Insert: {
          contact_number?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          contact_number?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      employee_status: "active" | "break" | "offline"
      equipment_status: "operational" | "maintenance" | "issue"
      fuel_type: "petrol" | "diesel" | "premium_petrol"
      payment_status: "pending" | "completed" | "overdue"
      shift_type: "morning" | "evening" | "night"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      employee_status: ["active", "break", "offline"],
      equipment_status: ["operational", "maintenance", "issue"],
      fuel_type: ["petrol", "diesel", "premium_petrol"],
      payment_status: ["pending", "completed", "overdue"],
      shift_type: ["morning", "evening", "night"],
    },
  },
} as const
