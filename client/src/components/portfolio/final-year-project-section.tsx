import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Cpu } from "lucide-react";

const FinalYearProjectSection = () => {
  return (
    <section id="final-year-project" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paper Publication
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <Card className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1761069183787-0272d2739ae6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cotton Plant Disease Detection and Classification Using Cloud Computing"
              className="w-full h-64 object-cover"
            />
            <CardContent className="p-8 space-y-6">
              {/* Title */}
              <div className="flex items-center gap-3">
                <Cpu className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">
                  Cotton Plant Disease Detection and Classification Using Cloud Computing
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                Designed and implemented a cloud-based intelligent system to detect
                and classify cotton plant diseases using deep learning and IoT.
                Thermal images captured via Raspberry Pi are transmitted using the
                MQTT protocol and processed in the cloud using transfer learning
                models to provide accurate disease diagnosis along with preventive
                recommendations for farmers.
              </p>

              {/* Highlights */}
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Implemented transfer learning using VGG-16, VGG-19, Inception,
                  and Xception V3 models.
                </li>
                <li>
                  Achieved up to <strong>95.2% accuracy</strong>, with Xception V3
                  delivering the best real-time performance.
                </li>
                <li>
                  Integrated IoT devices (Raspberry Pi) with MQTT for low-latency
                  image transmission.
                </li>
                <li>
                  Provided disease name, cause, and preventive measures through
                  cloud-based analysis.
                </li>
              </ul>

              {/* Tech Stack */}
              <div>
                <h4 className="font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>TensorFlow</Badge>
                  <Badge>Keras</Badge>
                  <Badge>Deep Learning</Badge>
                  <Badge>Transfer Learning</Badge>
                  <Badge>Xception V3</Badge>
                  <Badge>MQTT</Badge>
                  <Badge>Raspberry Pi</Badge>
                  <Badge>Cloud Computing</Badge>
                </div>
              </div>

              {/* Publication */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>
                    Published in <strong>International Journal on Science and Technology (IJSAT)</strong>, 2025
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1NIMOl6Ih6zuFwggQTsyoQ7U3wanwACMQ/view?usp=sharing",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Paper
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinalYearProjectSection;

