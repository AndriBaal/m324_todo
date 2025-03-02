#[cfg(test)]
mod tests {
    use crate::models::task::Task;

    #[test]
    fn test_serialization_and_deserialization() {
        let task = Task {
            id: None,
            title: "Test Task".to_string(),
            description: "This is a test task.".to_string(),
            done: false,
        };
        
        // Serialisieren
        let serialized = serde_json::to_string(&task).expect("Failed to serialize");
        
        // Deserialisieren
        let deserialized: Task = serde_json::from_str(&serialized).expect("Failed to deserialize");
        
        // Werte vergleichen
        assert_eq!(task.title, deserialized.title);
        assert_eq!(task.description, deserialized.description);
        assert_eq!(task.done, deserialized.done);
        assert_eq!(task.id.is_some(), deserialized.id.is_some()); // ObjectId direkt zu vergleichen wäre problematisch
    }
    
}
