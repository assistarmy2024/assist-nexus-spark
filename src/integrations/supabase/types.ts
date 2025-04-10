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
      followups: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          notes: string | null
          patient_id: string
          previous_visit_id: string | null
          purpose: string | null
          scheduled_date: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          previous_visit_id?: string | null
          purpose?: string | null
          scheduled_date: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          previous_visit_id?: string | null
          purpose?: string | null
          scheduled_date?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "followups_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "followups_previous_visit_id_fkey"
            columns: ["previous_visit_id"]
            isOneToOne: false
            referencedRelation: "patient_visits"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          category: Database["public"]["Enums"]["inventory_category"]
          created_at: string | null
          created_by: string | null
          description: string | null
          expiry_date: string | null
          id: string
          location: string | null
          name: string
          quantity: number
          reorder_level: number | null
          supplier: string | null
          unit: string | null
          unit_cost: number | null
          updated_at: string | null
        }
        Insert: {
          category: Database["public"]["Enums"]["inventory_category"]
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          expiry_date?: string | null
          id?: string
          location?: string | null
          name: string
          quantity?: number
          reorder_level?: number | null
          supplier?: string | null
          unit?: string | null
          unit_cost?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["inventory_category"]
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          expiry_date?: string | null
          id?: string
          location?: string | null
          name?: string
          quantity?: number
          reorder_level?: number | null
          supplier?: string | null
          unit?: string | null
          unit_cost?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      inventory_transactions: {
        Row: {
          created_at: string | null
          created_by: string | null
          current_quantity: number
          id: string
          inventory_id: string
          notes: string | null
          previous_quantity: number
          quantity: number
          reference_id: string | null
          transaction_type: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          current_quantity: number
          id?: string
          inventory_id: string
          notes?: string | null
          previous_quantity: number
          quantity: number
          reference_id?: string | null
          transaction_type: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          current_quantity?: number
          id?: string
          inventory_id?: string
          notes?: string | null
          previous_quantity?: number
          quantity?: number
          reference_id?: string | null
          transaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_transactions_inventory_id_fkey"
            columns: ["inventory_id"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          amount: number
          created_at: string | null
          description: string
          id: string
          invoice_id: string
          quantity: number | null
          unit_price: number
        }
        Insert: {
          amount: number
          created_at?: string | null
          description: string
          id?: string
          invoice_id: string
          quantity?: number | null
          unit_price: number
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string
          id?: string
          invoice_id?: string
          quantity?: number | null
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          created_at: string | null
          created_by: string | null
          discount: number | null
          due_date: string | null
          id: string
          notes: string | null
          patient_id: string
          status: Database["public"]["Enums"]["payment_status"] | null
          tax: number | null
          total_amount: number
          updated_at: string | null
          visit_id: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          discount?: number | null
          due_date?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          status?: Database["public"]["Enums"]["payment_status"] | null
          tax?: number | null
          total_amount: number
          updated_at?: string | null
          visit_id?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          discount?: number | null
          due_date?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          status?: Database["public"]["Enums"]["payment_status"] | null
          tax?: number | null
          total_amount?: number
          updated_at?: string | null
          visit_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_visit_id_fkey"
            columns: ["visit_id"]
            isOneToOne: false
            referencedRelation: "patient_visits"
            referencedColumns: ["id"]
          },
        ]
      }
      patient_journey: {
        Row: {
          created_at: string | null
          created_by: string | null
          end_time: string | null
          id: string
          notes: string | null
          patient_id: string
          stage: Database["public"]["Enums"]["journey_stage"]
          start_time: string | null
          updated_at: string | null
          visit_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          end_time?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          stage: Database["public"]["Enums"]["journey_stage"]
          start_time?: string | null
          updated_at?: string | null
          visit_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          end_time?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          stage?: Database["public"]["Enums"]["journey_stage"]
          start_time?: string | null
          updated_at?: string | null
          visit_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "patient_journey_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "patient_journey_visit_id_fkey"
            columns: ["visit_id"]
            isOneToOne: false
            referencedRelation: "patient_visits"
            referencedColumns: ["id"]
          },
        ]
      }
      patient_visits: {
        Row: {
          admission_date: string | null
          attending_doctor: string | null
          chief_complaint: string | null
          created_at: string | null
          created_by: string | null
          diagnosis: string | null
          discharge_date: string | null
          id: string
          notes: string | null
          patient_id: string
          room_number: string | null
          status: Database["public"]["Enums"]["patient_status"] | null
          updated_at: string | null
          visit_type: Database["public"]["Enums"]["patient_type"]
        }
        Insert: {
          admission_date?: string | null
          attending_doctor?: string | null
          chief_complaint?: string | null
          created_at?: string | null
          created_by?: string | null
          diagnosis?: string | null
          discharge_date?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          room_number?: string | null
          status?: Database["public"]["Enums"]["patient_status"] | null
          updated_at?: string | null
          visit_type: Database["public"]["Enums"]["patient_type"]
        }
        Update: {
          admission_date?: string | null
          attending_doctor?: string | null
          chief_complaint?: string | null
          created_at?: string | null
          created_by?: string | null
          diagnosis?: string | null
          discharge_date?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          room_number?: string | null
          status?: Database["public"]["Enums"]["patient_status"] | null
          updated_at?: string | null
          visit_type?: Database["public"]["Enums"]["patient_type"]
        }
        Relationships: [
          {
            foreignKeyName: "patient_visits_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
        ]
      }
      patients: {
        Row: {
          address: string | null
          blood_group: string | null
          created_at: string | null
          created_by: string | null
          date_of_birth: string | null
          email: string | null
          emergency_contact: string | null
          full_name: string
          gender: string | null
          id: string
          medical_history: Json | null
          phone: string | null
          registration_date: string | null
          reward_points: number | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          blood_group?: string | null
          created_at?: string | null
          created_by?: string | null
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          full_name: string
          gender?: string | null
          id?: string
          medical_history?: Json | null
          phone?: string | null
          registration_date?: string | null
          reward_points?: number | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          blood_group?: string | null
          created_at?: string | null
          created_by?: string | null
          date_of_birth?: string | null
          email?: string | null
          emergency_contact?: string | null
          full_name?: string
          gender?: string | null
          id?: string
          medical_history?: Json | null
          phone?: string | null
          registration_date?: string | null
          reward_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      prescription_items: {
        Row: {
          created_at: string | null
          dosage: string | null
          duration: string | null
          frequency: string | null
          id: string
          instructions: string | null
          inventory_id: string | null
          item_name: string
          prescription_id: string
        }
        Insert: {
          created_at?: string | null
          dosage?: string | null
          duration?: string | null
          frequency?: string | null
          id?: string
          instructions?: string | null
          inventory_id?: string | null
          item_name: string
          prescription_id: string
        }
        Update: {
          created_at?: string | null
          dosage?: string | null
          duration?: string | null
          frequency?: string | null
          id?: string
          instructions?: string | null
          inventory_id?: string | null
          item_name?: string
          prescription_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "prescription_items_inventory_id_fkey"
            columns: ["inventory_id"]
            isOneToOne: false
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prescription_items_prescription_id_fkey"
            columns: ["prescription_id"]
            isOneToOne: false
            referencedRelation: "prescriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      prescriptions: {
        Row: {
          created_at: string | null
          created_by: string | null
          diagnosis: string | null
          id: string
          notes: string | null
          patient_id: string
          prescription_type:
            | Database["public"]["Enums"]["prescription_type"]
            | null
          updated_at: string | null
          visit_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          diagnosis?: string | null
          id?: string
          notes?: string | null
          patient_id: string
          prescription_type?:
            | Database["public"]["Enums"]["prescription_type"]
            | null
          updated_at?: string | null
          visit_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          diagnosis?: string | null
          id?: string
          notes?: string | null
          patient_id?: string
          prescription_type?:
            | Database["public"]["Enums"]["prescription_type"]
            | null
          updated_at?: string | null
          visit_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "prescriptions_patient_id_fkey"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "patients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prescriptions_visit_id_fkey"
            columns: ["visit_id"]
            isOneToOne: false
            referencedRelation: "patient_visits"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          city: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
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
      inventory_category: "Medicine" | "Equipment" | "Consumable" | "Stationary"
      journey_stage:
        | "Registration"
        | "Consultation"
        | "Diagnosis"
        | "Treatment"
        | "Discharge"
        | "Follow-up"
      patient_status: "Admitted" | "Discharged" | "Follow-up" | "Cancelled"
      patient_type: "OPD" | "IPD" | "Emergency"
      payment_status: "Paid" | "Pending" | "Overdue" | "Cancelled"
      prescription_type: "Physical" | "Digital"
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
      inventory_category: ["Medicine", "Equipment", "Consumable", "Stationary"],
      journey_stage: [
        "Registration",
        "Consultation",
        "Diagnosis",
        "Treatment",
        "Discharge",
        "Follow-up",
      ],
      patient_status: ["Admitted", "Discharged", "Follow-up", "Cancelled"],
      patient_type: ["OPD", "IPD", "Emergency"],
      payment_status: ["Paid", "Pending", "Overdue", "Cancelled"],
      prescription_type: ["Physical", "Digital"],
    },
  },
} as const
